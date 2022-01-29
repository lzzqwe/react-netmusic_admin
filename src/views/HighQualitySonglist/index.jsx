
import React, { useState, useEffect } from 'react'
import { Table, Tag, Space, Radio } from 'antd';
import './index.scss'
import { highqualitySongslist, highqualityTags } from '../../api/index'
const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        width: 120
    },
    {
        title: '歌单名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '描述',
        dataIndex: 'description',
        key: 'description',
        width: 500,
        ellipsis: true
    },
    {
        title: '播放量',
        dataIndex: 'playCount',
        key: 'playCount',
        width: 120,
        ellipsis: true
    },
    {
        title: '分享数',
        dataIndex: 'shareCount',
        key: 'shareCount',
        width: 120,
        ellipsis: true
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        width: 150,
        ellipsis: true,
        render: (record) => {
            const date = new Date(record)
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            return `${year}年${month}月${day}日`
        }
    },
    {
        title: '评论量',
        dataIndex: 'commentCount',
        key: 'commentCount',
        width: 120,
        ellipsis: true
    },
    {
        title: '歌曲标签',
        dataIndex: 'tags',
        key: 'tags',
        render: tags => {
            return (
                <div>
                    {
                        tags.map((item) => {
                            let colors = item.length > 2 ? 'red' : 'blue'
                            return (
                                <Tag key={item} color={colors}>{item}</Tag>
                            )
                        })
                    }
                </div>
            )
        }
    },
];
const HighQualitySonglist = () => {
    const [qualities, setQualities] = useState([])
    const [before, setBefore] = useState(0)
    const [lasttime, setLasttime] = useState(0)
    const [total, setTotal] = useState(0)
    const [cat, setCat] = useState('')
    const [qualitTags, setQualitTags] = useState([])
    const getHighqualitySongslist = () => {
        let paydata = {
            limit: 10,
            before,
            cat
        }
        highqualitySongslist(paydata).then((res) => {
            if (res.code == 200) {
                setQualities(res.playlists)
                setTotal(res.total)
                setLasttime(res.lasttime)
            }
        })
    }
    //
    const handleChangeValue = (e) => {
        setCat(() => {
            return e.target.value
        })
    }
    // 获取精品歌单标签列表
    const getQualitTags = () => {
        highqualityTags().then((res) => {
            if (res.code == 200) {
                setQualitTags(res.tags)
            }
        })
    }
    useEffect(() => {
        getHighqualitySongslist()
    }, [before, cat])
    useEffect(() => {
        getQualitTags()
    }, [])
    return (
        <div className='highquality-songlist'>
            <div className='highquality-songlist-search_warp'>
                <label className='highquality-songlist-search_label'>歌单标签</label>
                <Radio.Group onChange={handleChangeValue} className='highquality-songlist-radio_group' buttonStyle="solid">
                    {qualitTags.map((item) => {
                        return (
                            <Radio.Button className='highquality-songlist-radio' key={item.name} value={item.name}>{item.name}</Radio.Button>
                        )
                    })}
                </Radio.Group>
            </div>
            <div className='highquality-songlist-table_warp'>
                <Table
                    dataSource={qualities}
                    columns={columns}
                    rowKey={(record) => {
                        return record.id
                    }}
                    pagination={{
                        position: ['bottomCenter'],
                        total,
                        onChange: () => {
                            setBefore(() => {
                                return lasttime
                            })
                            getHighqualitySongslist()
                        }
                    }} />
            </div>
        </div>
    )
}
export default HighQualitySonglist