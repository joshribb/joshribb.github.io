const chapter_verses = [
    33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31,
];
const chapter = Math.floor(Math.random() * chapter_verses.length) + 1;
const verse = Math.floor(Math.random() * chapter_verses[chapter - 1]) + 1;
const url = new URL('https://api.esv.org/v3/passage/text/');

url.searchParams.append('q', `Proverbs ${chapter}:${verse}`);
url.searchParams.append('include-audio-link', 'false');
url.searchParams.append('include-verse-numbers', 'false');
url.searchParams.append('include-footnotes', 'false');
url.searchParams.append('include-short-copyright', 'false');
url.searchParams.append('include-passage-references', 'false');

export default () =>
    fetch(url.toString(), {
        method: 'GET',
        headers: { Authorization: `Token ${import.meta.env.ESV_TOKEN}` },
    })
        .then((res) => res.json())
        .then((res) => {
            return {
                ref: `${res.canonical} (ESV)`,
                passage: res.passages.join(' ').trim(),
            };
        });
