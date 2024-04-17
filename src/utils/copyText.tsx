export default function copyText(
  text: string,
  onCopySuccess: () => void,
  onCopyError: (error: Error) => void
) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      onCopySuccess();
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
      onCopyError(err);
    });
}
