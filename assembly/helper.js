export function getSegmentLength(s) {
    return [...new Intl.Segmenter().segment(s)].length;
}
  
export function getCodePointLength(s) {
    return Array.from(s).length;
}