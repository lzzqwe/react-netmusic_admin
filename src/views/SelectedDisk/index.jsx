import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Radio } from "antd";
import { getSongList, getCatlist } from "../../api/index";
import "./index.scss";
const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
    width: 120,
  },
  {
    title: "歌单名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "描述",
    dataIndex: "description",
    key: "description",
    width: 500,
    ellipsis: true,
  },
  {
    title: "播放量",
    dataIndex: "playCount",
    key: "playCount",
    width: 120,
    ellipsis: true,
  },
  {
    title: "分享数",
    dataIndex: "shareCount",
    key: "shareCount",
    width: 120,
    ellipsis: true,
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime",
    width: 150,
    ellipsis: true,
    render: (record) => {
      const date = new Date(record);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}年${month}月${day}日`;
    },
  },
  {
    title: "评论量",
    dataIndex: "commentCount",
    key: "commentCount",
    width: 120,
    ellipsis: true,
  },
  {
    title: "歌曲标签",
    dataIndex: "tags",
    key: "tags",
    render: (tags) => {
      return (
        <div>
          {tags.map((item) => {
            let colors = item.length > 2 ? "red" : "blue";
            return (
              <Tag key={item} color={colors}>
                {item}
              </Tag>
            );
          })}
        </div>
      );
    },
  },
];
const SongList = () => {
  const [list, setList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [cat, setCat] = useState("全部歌单");
  const [tags, setTags] = useState([]);
  useEffect(() => {
    songlist();
  }, [offset, cat]);
  useEffect(() => {
    getCats();
  }, []);
  const getCats = () => {
    getCatlist().then((res) => {
      if (res.code == 200) {
        let category = res.sub;
        category.unshift(res.all);
        setTags(category);
      }
    });
  };
  const songlist = () => {
    const payData = {
      limit: 10,
      offset,
      cat,
    };
    getSongList(payData).then((res) => {
      if (res.code == 200) {
        setList(res.playlists);
        setTotal(res.total);
      }
    });
  };
  const getTagValue = (e) => {
    console.log(e);
    setCat(() => {
      return e.target.value;
    });
  };

  return (
    <div className="song-list">
      <div className="song-list-content">
        <div className="song-list_search">
          <label className="song-list_search_label">歌曲标签:</label>
          <Radio.Group
            className="song-list_search_radiogroup"
            onChange={getTagValue}
            defaultValue="全部歌单"
            buttonStyle="solid"
          >
            {tags.map((item) => {
              return (
                <Radio.Button
                  className="song-list_search_radio"
                  key={item.name}
                  value={item.name}
                >
                  {item.name}
                </Radio.Button>
              );
            })}
          </Radio.Group>
        </div>
        <Table
          columns={columns}
          dataSource={list}
          rowKey={(record) => {
            return record.id;
          }}
          pagination={{
            position: ["bottomCenter"],
            total,
            onChange: (page, pageSize) => {
              setOffset(() => {
                return page - 1;
              });
              songlist();
            },
          }}
        />
      </div>
    </div>
  );
};
export default SongList;
