class Exporter {
  static exportItems(itens) {
    const jsonObject = JSON.stringify(itens);
    const nomeDoArquivo = "export.json";
    const blob = new Blob([jsonObject]);
    const link = document.createElement("a");

    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", nomeDoArquivo);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
