const TAG_SEPERATOR = ', ';

const formatPostTags = tags => {
  let newTags = tags.sort((a, b) => {
    if (a > b) return 1;
    else if (b > a) return -1;
    return 0;
  });
  newTags = newTags.map(el => {
    switch (el) {
      case 'css':
        return 'CSS';
      case 'sass':
        return 'SASS';
      default:
        return el.charAt(0).toUpperCase() + el.substring(1);
    }
  });
  return newTags.join(TAG_SEPERATOR);
};

export default {
  formatPostTags,
};
