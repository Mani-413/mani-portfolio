import { useEffect, useState } from "react";
import { X, Download, Loader2, FileText } from "lucide-react";
import { btnClass } from "./ui";
import { LINKS } from "./data";

type Rendered = { page: number; url: string };

export function ResumeViewer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [pages, setPages] = useState<Rendered[]>([]);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setPages([]);
    setFailed(false);
    setLoading(true);
    (async () => {
      try {
        const [{ default: workerUrl }, pdfjsLib] = await Promise.all([
          import("pdfjs-dist/build/pdf.worker.min.js?url"),
          import("pdfjs-dist"),
        ]);
        pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;
        const pdf = await pdfjsLib.getDocument({ url: LINKS.resume }).promise;
        const rendered: Rendered[] = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 2 });
          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: canvas.getContext("2d")!, viewport }).promise;
          rendered.push({ page: i, url: canvas.toDataURL("image/png") });
          canvas.width = 0;
          canvas.height = 0;
        }
        if (!cancelled) setPages(rendered);
      } catch (e) {
        console.error("Resume preview failed:", e);
        if (!cancelled) setFailed(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
    >
      <div
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-primary" />
            <h3 className="font-display font-semibold">My Resume</h3>
          </div>
          <div className="flex items-center gap-2">
            <a href={LINKS.resume} download="Manikandan_Resume.pdf" className={`${btnClass()} px-4 py-2`}>
              <Download size={16} /> Download
            </a>
            <button onClick={onClose} aria-label="Close resume preview" className="glass grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:text-foreground">
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto bg-muted/40 p-4">
          {loading && (
            <div className="flex flex-col items-center gap-3 py-16 text-muted-foreground">
              <Loader2 className="animate-spin text-primary" size={32} />
              <p className="text-sm">Loading resume…</p>
            </div>
          )}
          {failed && (
            <div className="flex flex-col gap-3">
              <iframe src={LINKS.resume} title="Resume" className="h-[70vh] w-full rounded-lg bg-card" />
              <a href={LINKS.resume} target="_blank" rel="noreferrer" className={`${btnClass("outline")} self-center`}>Open resume in new tab</a>
            </div>
          )}
          {pages.map((p) => (
            <img
              key={p.page}
              src={p.url}
              alt={`Resume page ${p.page}`}
              className="mx-auto mb-4 block w-full max-w-xl rounded-lg bg-white shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
