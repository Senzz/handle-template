const handleTemplate = (template, data) => {
  return template.replace(/\{\{\{(\S+)?\}\}\}/g, (_, b) => {
    return data[b];
  });
};

module.exports = handleTemplate;
