
import React, { useState, useEffect } from 'react'
import { Table, Tag, Space } from 'antd';
import { getSongList } from '../../api/index'
import './index.scss'
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: '歌单名',
    dataIndex: 'name',
    key: 'name',
  },
]
const SongList = () => {
  const [list, setList] = useState([])
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const payData = {
      limit: 10,
      offset
    }
    getSongList(payData).then((res) => {
      if (res.code == 200) {
        setList(res.playlists)
      }
    })
  }, []);
  return (
    <div className="song-list">
      <div>
        {/* {list.map((item) => {
          return (
            <div key={item.id}>
              {item.name}
            </div>
          )
        })} */}
        <Table columns={columns} dataSource={list} />
      </div>

    </div>
  )
}
export default SongList