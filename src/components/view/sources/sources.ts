import { NewsSource } from 'src/types';
import './sources.css';

class Sources {
    draw(data: NewsSource[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true);

            if (sourceClone instanceof DocumentFragment) {
                const itemName = sourceClone.querySelector('.source__item-name');
                if (itemName) itemName.textContent = item.name;
                sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
