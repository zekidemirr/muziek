const tracks = [
  { title: 'One Dance', query: 'One Dance Drake' },
  { title: 'Hotline Bling', query: 'Hotline Bling Drake' },
  { title: "God's Plan", query: "God's Plan Drake" },
  { title: 'In My Feelings', query: 'In My Feelings Drake' },
  { title: 'Started From the Bottom', query: 'Started From the Bottom Drake' },
  { title: 'Nice for What', query: 'Nice for What Drake' },
  { title: 'Nonstop', query: 'Nonstop Drake' },
  { title: 'Passionfruit', query: 'Passionfruit Drake' },
  { title: 'Take Care (feat. Rihanna)', query: 'Take Care Drake' },
  { title: "Hold On, We're Going Home", query: "Hold On We're Going Home Drake" }
];

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('playlist');
  tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.className = 'track';

    const title = document.createElement('span');
    title.className = 'title';
    title.textContent = `${index + 1}. ${track.title}`;

    const link = document.createElement('a');
    link.className = 'play-btn';
    link.textContent = '▶';
    link.href = `https://open.spotify.com/search/${encodeURIComponent(track.query)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    li.appendChild(title);
    li.appendChild(link);
    list.appendChild(li);
  });
});
