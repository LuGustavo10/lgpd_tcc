import { retrieveData } from '../Controller/readFirebase.js';

async function search(searchTerm) {
  const snapshot = await retrieveData();
  const data = Array.isArray(snapshot) ? snapshot : snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  const filteredData = data.filter(item => {
    const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const ageMatch = item.age.toString().includes(searchTerm);
    return nameMatch || ageMatch;
  });
  return filteredData;
}

function editData(id) {
  const url = new URL('edit.html', window.location.origin);
  url.searchParams.set('id', id);
  window.location.href = url.href;
}

export { search, editData };