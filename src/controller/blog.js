const getList = (author, id) => {
  return [
    {
      id,
      title: "这场改变世界的战争 美国就这样输了",
      content: "第1个标题的文章正文",
      createTime: 1618455828984,
      author,
    },
    {
      id,
      title: "这场改变世界的战争 美国就这样输了",
      content: "第2个标题的文章的正文",
      createTime: 1618455882123,
      author,
    },
  ];
};

const getDetail = (id) => {
  return {
    id,
    title: "这场改变世界的战争 美国就这样输了",
    content: "第1个标题的文章正文",
    createTime: 1618455828984,
    author:"123",
  };
};

module.exports = {
  getList,
  getDetail,
};
