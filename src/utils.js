const paginate = (mails) => {
  const itemsPerPage = 6;
  const pages = Math.ceil(mails.length / itemsPerPage);

  const newMails = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return mails.slice(start, start + itemsPerPage);
  });
  return newMails;
};

export default paginate;
