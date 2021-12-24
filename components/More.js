import React, { useState } from 'react'
import { moreBox, selectList } from "../styles/style"

export default function More({ showList, setShowList, handleEdit, handleDel }) {
    const onClickInner = (e) => {
        e.stopPropagation();
        setShowList(true)
    }
    const onClickEdit = (e) => {
        e.stopPropagation();
        handleEdit()
        setShowList(false)
    }
    const onClickDel = (e) => {
        e.stopPropagation();
        handleDel()
        setShowList(false)
    }
    return (
        <>
            <div className='moreBox' css={moreBox} onClick={onClickInner}>
                <img src="/icon_more_vert.svg" />
            </div>
            {
                showList
                    ? <div css={selectList}>
                        <div className='dropdown-item' onClick={onClickEdit}>修改快捷方式</div>
                        <div className='dropdown-item' onClick={onClickDel}>移除</div>
                    </div>
                    : null
            }

        </>
    )
}
