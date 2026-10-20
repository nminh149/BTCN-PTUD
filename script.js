// Demo chạy hoàn toàn ở trình duyệt: không dùng backend hay cơ sở dữ liệu.
const HISTORY_KEY = 'hella-beauty-demo-search-history';
const input = document.querySelector('#search-input');
const form = document.querySelector('#search-form');
const historySection = document.querySelector('#history-section');
const historyList = document.querySelector('#history-list');
const clearHistoryButton = document.querySelector('#clear-history');
const cards = [...document.querySelectorAll('.product-card')];
const feedback = document.querySelector('#search-feedback');
const productCount = document.querySelector('#product-count');
const emptyState = document.querySelector('#empty-state');
const grid = document.querySelector('#product-grid');
const toast = document.querySelector('#toast');
let toastTimeout;

function normalizeText(value) {
  return value.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').trim();
}
function getHistory() {
  try {
    const saved = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    return Array.isArray(saved) ? saved.filter(v => typeof v === 'string').slice(0, 6) : [];
  } catch { return []; }
}
function saveHistory(items) {
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(items)); } catch { /* Chế độ riêng tư có thể chặn bộ nhớ. */ }
}
function renderHistory() {
  const history = getHistory();
  historyList.replaceChildren();
  historySection.hidden = history.length === 0 || document.activeElement !== input;
  history.forEach(term => {
    const li = document.createElement('li');
    li.className = 'history-item';
    const use = document.createElement('button');
    use.type = 'button'; use.className = 'history-query'; use.textContent = term;
    use.addEventListener('click', () => search(term));
    const remove = document.createElement('button');
    remove.type = 'button'; remove.className = 'history-remove'; remove.textContent = '×';
    remove.setAttribute('aria-label', `Xóa từ khóa ${term}`);
    remove.addEventListener('click', () => {
      saveHistory(getHistory().filter(item => item !== term));
      input.focus(); renderHistory();
    });
    li.append(use, remove); historyList.append(li);
  });
}
function search(query) {
  const term = query.trim();
  input.value = term;
  const normalized = normalizeText(term);
  let count = 0;
  cards.forEach(card => {
    const haystack = normalizeText(`${card.dataset.name} ${card.dataset.keywords}`);
    const matched = !normalized || normalized.split(/\s+/).every(word => haystack.includes(word));
    card.hidden = !matched;
    if (matched) count++;
  });
  productCount.textContent = `${count} sản phẩm`;
  feedback.textContent = term ? `Kết quả tìm kiếm cho “${term}”` : '';
  grid.hidden = count === 0;
  emptyState.hidden = count !== 0;
  if (term) saveHistory([term, ...getHistory().filter(t => normalizeText(t) !== normalized)].slice(0, 6));
  historySection.hidden = true;
  document.querySelector('#san-pham').scrollIntoView({behavior:'smooth',block:'start'});
}
form.addEventListener('submit', event => { event.preventDefault(); search(input.value); });
input.addEventListener('focus', renderHistory);
input.addEventListener('keydown', event => { if (event.key === 'Escape') historySection.hidden = true; });
document.addEventListener('pointerdown', event => {
  if (!event.target.closest('#history-section, #search-input')) historySection.hidden = true;
});
clearHistoryButton.addEventListener('click', () => { saveHistory([]); input.focus(); renderHistory(); });
document.querySelectorAll('[data-query]').forEach(btn => btn.addEventListener('click', () => search(btn.dataset.query)));
document.querySelector('#show-all').addEventListener('click', () => search(''));
function showToast(message) {
  toast.textContent = message; toast.hidden = false;
  clearTimeout(toastTimeout); toastTimeout = setTimeout(() => { toast.hidden = true; }, 3000);
}
document.querySelectorAll('.product-action').forEach(button => {
  button.addEventListener('click', () => showToast(`Đã chọn “${button.dataset.product}”. Giỏ hàng chưa được triển khai trong bản demo.`));
});

const detailModal = document.querySelector('#product-modal');
document.querySelectorAll('.product-details').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.product-card');
    document.querySelector('#detail-title').textContent = card.querySelector('h3').textContent;
    document.querySelector('#detail-category').textContent = card.querySelector('.product-category').textContent;
    document.querySelector('#detail-description').textContent = card.querySelector('.product-description').textContent;
    document.querySelector('#detail-price').textContent = card.querySelector('.product-price').textContent;
    detailModal.hidden = false;
    document.querySelector('#detail-close').focus();
  });
});
function closeDetails() { detailModal.hidden = true; }
document.querySelector('#detail-close').addEventListener('click', closeDetails);
detailModal.addEventListener('click', event => { if (event.target === detailModal) closeDetails(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !detailModal.hidden) closeDetails(); });

