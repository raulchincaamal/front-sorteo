export const downloadFile = (data: any) => {
  const linkToDownload = document.createElement("a");
  const downloadUrl = URL.createObjectURL(new Blob([data]));
  linkToDownload.setAttribute("href", downloadUrl);
  linkToDownload.setAttribute("download", "ganadores.xlsx");
  linkToDownload.click();
};
