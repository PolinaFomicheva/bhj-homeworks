const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach(el => {
    const tooltip = document.createElement('div');
    tooltip.textContent = el.title;
    el.addEventListener('click', (event) => {
        event.preventDefault();
        tooltip.classList.add('tooltip');
        el.insertAdjacentElement('beforeBegin', tooltip);
        tooltip.style.left = `${el.getBoundingClientRect().left}px`;
        tooltip.style.top = `${el.getBoundingClientRect().bottom}px`;
        const activeTooltip = Array.from(document.querySelectorAll('.tooltip_active'));
        const activeFind = activeTooltip.find(elem => elem.classList.contains('tooltip_active'));
        if (activeFind === undefined) {
            tooltip.classList.add('tooltip_active');
        } else {
            if (activeFind !== tooltip) {
                tooltip.classList.add("tooltip_active");
            }
            activeFind.classList.toggle('tooltip_active');
        }
    }
    )
})