const onInputChange = e => {
  const target = e.target;
  const targetVal = target.value;
  if (target.nodeName.toLowerCase() === 'input') {
    const key = e.key;
    switch (key) {
      case 'ArrowUp':
        target.value = targetVal === '' ? 1 : parseInt(targetVal, 10) + 1;
        break;
      case 'ArrowDown':
        target.value = (targetVal === '' ? 0 : (targetVal === '0' ? '0' : parseInt(targetVal, 10) - 1));
        break;
      case 'ArrowLeft':
      case 'Backspace':
      case 'Delete':
      case 'ArrowRight':
        break;
      default:
        const value = parseInt(key, 10);
        e.preventDefault();
        if (!isNaN(value)) {
          const currentValue = targetVal === '' ? '0' : parseInt(targetVal, 10);
          const maxValue = parseInt(target.getAttribute('data-max'));
          target.value = currentValue.toString() + value;
          if (parseInt(target.value, 10) > maxValue) {
            target.value = maxValue;
          }
        }
        break;
    }
    if (key !== 'Delete' && key !== 'Backspace') {

    }
  }
}
document.addEventListener("keydown", onInputChange);
