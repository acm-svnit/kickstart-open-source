function fillCss() {
	const children = document.getElementById('contributors').childNodes;

	children.forEach((child, id) => {
		if (child.tagName == 'DIV') {
			child.className = `
                column
                is-half-tablet
                is-three-quarters-mobile
                is-one-quarter-fullhd
                is-one-third-widescreen
                has-text-centered
            `;

			let i = 0;
			let len = child.childNodes.length,
				box = child.childNodes[i];
			while (++i < len && box.tagName != 'DIV') {
				box = child.childNodes[i];
			}

			if (box.tagName == 'DIV') {
				box.className = `
                        box
                        is-flex
                        is-justify-content-space-between
                        is-align-items-center
                    `;

				let pChilds = box.childNodes,
					x = 0;
				let p = pChilds[x];
				pLen = pChilds.length;
				while (++x < pLen && p.tagName != 'SPAN') {
					p = pChilds[x];
				}

				len = p.childNodes.length;
				for (let j = 0, k = 0; j < len; j++) {
					if (p.childNodes[j].tagName == 'P') {
						if (k == 0) {
							p.childNodes[j].className = `title is-5`;
							k++;
						} else if (k == 1) {
							p.childNodes[j].className = `subtitle is-6`;
						} else {
							break;
						}
					}
				}
			}
		}
	});
}

document.addEventListener('DOMContentLoaded', event => {
	document.addEventListener('load', fillCss());
});
