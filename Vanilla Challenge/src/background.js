const colors = [
    "#a18cd1",
    "#fbc2eb",
    "#fad0c4",
    "#ffd1ff",
    "#a1c4fd",
    "#c2e9fb",
  ];

    const randIndex1 = Math.floor(Math.random() * colors.length);
    const randIndex2 = Math.floor(Math.random() * colors.length);
    document.body.style.background = `linear-gradient(to right, ${colors[randIndex1]}, ${colors[randIndex2]}`