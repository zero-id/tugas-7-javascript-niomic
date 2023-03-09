var height = [150, 155, 160, 165, 170, 175, 180, 185, 190, 195]

for (let i = 0; i < height.length; i++) {
    console.log(height[i], "perulangan biasa")
}

for (let x of height) {
    console.log(x, "perulangan for of")
}