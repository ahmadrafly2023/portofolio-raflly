declare global {
    interface Window {
        PhotoSwipe: any;
        PhotoSwipeUI_Default: any;
    }
}

interface PhotoSwipeItem {
    w: number;
    h: number;
    src: string;
    msrc: string;
    title?: string;
    el: HTMLElement;
}

class StackGallery {
    private galleryUID: number;
    private items: PhotoSwipeItem[] = [];

    constructor(container: HTMLElement, galleryUID = 1) {
        if (window.PhotoSwipe == undefined || window.PhotoSwipeUI_Default == undefined) {
            console.error("PhotoSwipe lib not loaded.");
            return;
        }

        this.galleryUID = galleryUID;

        StackGallery.createGallery(container);
        this.loadItems(container);
        this.bindClick();
    }

    private loadItems(container: HTMLElement) {
        this.items = [];

        const figures = container.querySelectorAll<HTMLElement>('figure.gallery-image');

        for (const el of Array.from(figures)) {
            const figcaption = el.querySelector('figcaption');
            const img = el.querySelector('img') as HTMLImageElement | null;

            if (!img) continue;

            let aux: PhotoSwipeItem = {
                w: parseInt(img.getAttribute('width') || "0"),
                h: parseInt(img.getAttribute('height') || "0"),
                src: img.src,
                msrc: img.getAttribute('data-thumb') || img.src,
                el: el
            };

            if (figcaption) {
                aux.title = figcaption.innerHTML;
            }

            this.items.push(aux);
        }
    }

    public static createGallery(container: HTMLElement) {
        const images = container.querySelectorAll<HTMLImageElement>('img.gallery-image');

        for (const img of Array.from(images)) {
            const paragraph = img.closest('p');

            if (!paragraph || !container.contains(paragraph)) continue;

            if (paragraph.textContent?.trim() === '') {
                paragraph.classList.add('no-text');
            }

            let isNewLineImage = paragraph.classList.contains('no-text');
            if (!isNewLineImage) continue;

            const hasLink = img.parentElement?.tagName === 'A';

            let el: HTMLElement = img;
            const figure = document.createElement('figure');
            figure.style.setProperty('flex-grow', img.getAttribute('data-flex-grow') || '1');
            figure.style.setProperty('flex-basis', img.getAttribute('data-flex-basis') || '0');

            if (hasLink && img.parentElement) {
                el = img.parentElement as HTMLElement;
            }

            el.parentElement?.insertBefore(figure, el);
            figure.appendChild(el);

            if (img.hasAttribute('alt')) {
                const figcaption = document.createElement('figcaption');
                figcaption.innerText = img.getAttribute('alt') || "";
                figure.appendChild(figcaption);
            }

            if (!hasLink) {
                figure.className = 'gallery-image';

                const a = document.createElement('a');
                a.href = img.src;
                a.setAttribute('target', '_blank');
                img.parentNode?.insertBefore(a, img);
                a.appendChild(img);
            }
        }

        const figuresEl = container.querySelectorAll<HTMLElement>('figure.gallery-image');

        let currentGallery: HTMLElement[] = [];

        for (const figure of Array.from(figuresEl)) {
            if (!currentGallery.length) {
                currentGallery = [figure];
            } else if (figure.previousElementSibling === currentGallery[currentGallery.length - 1]) {
                currentGallery.push(figure);
            } else if (currentGallery.length) {
                StackGallery.wrap(currentGallery);
                currentGallery = [figure];
            }
        }

        if (currentGallery.length > 0) {
            StackGallery.wrap(currentGallery);
        }
    }

    public static wrap(figures: HTMLElement[]) {
        const galleryContainer = document.createElement('div');
        galleryContainer.className = 'gallery';

        const parentNode = figures[0].parentNode;
        const first = figures[0];

        parentNode?.insertBefore(galleryContainer, first);

        for (const figure of figures) {
            galleryContainer.appendChild(figure);
        }
    }

    public open(index: number) {
        const pswp = document.querySelector('.pswp') as HTMLDivElement;
        const ps = new window.PhotoSwipe(pswp, window.PhotoSwipeUI_Default, this.items, {
            index: index,
            galleryUID: this.galleryUID,
            getThumbBoundsFn: (i: number) => {
                const thumbnail = this.items[i].el.getElementsByTagName('img')[0];
                const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                const rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            }
        });

        ps.init();
    }

    private bindClick() {
        this.items.forEach((item, index) => {
            const a = item.el.querySelector('a') as HTMLAnchorElement | null;

            if (a) {
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.open(index);
                });
            }
        });
    }
}

export default StackGallery;
