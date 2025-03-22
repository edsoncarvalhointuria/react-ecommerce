export function receipt(form) {
    form = new FormData(form);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const width = 450;
    const height = 300;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "#f2f2f2";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#000000";
    ctx.font = "20px Arial";
    ctx.fillText("Recibo de Pagamento", 100, 40);

    ctx.font = "16px Arial";
    let position = 60;
    for (let [name, info] of form.entries()) {
        if (name === "cvv" || name === "vencimento") {
            continue;
        }
        const listText = info.split(" ").reduce(
            (acc, currentV) => {
                const text = acc[acc.length - 1] + " " + currentV.toUpperCase();
                const tamanho = ctx.measureText(name.toUpperCase() + text);

                if (tamanho.width + 30 > width - 50) {
                    acc.push(currentV.toUpperCase());
                } else {
                    acc[acc.length - 1] = text;
                }

                return acc;
            },
            [""]
        );

        listText[0] = name.toUpperCase() + " : " + listText[0];

        listText.forEach((v) => {
            position += 20;
            ctx.fillText(`${v}`, 20, position);
        });
    }

    // Baixar a imagem
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "recibo.png";
    link.click();

    // const home = document.createElement("a");
    // home.href = "/";
    // home.click();
}
