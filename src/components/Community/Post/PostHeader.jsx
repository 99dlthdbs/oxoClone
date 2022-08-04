import React from 'react';
import styled from 'styled-components';
// 프로필 사진
import dino from './data/tribes/dino_NORMAL.png';
import elephant from './data/tribes/elephant_NORMAL.png';
import hippo from './data/tribes/hippo_NORMAL.png';
import lion from './data/tribes/lion_NORMAL.png';
import tiger from './data/tribes/tiger_NORMAL.png';
// 아이콘
import ButtonKebab from '../icons/ButtonKebab.jsx';
import IconChat from '../icons/buttonChat.png';

const PostHeader = ({ userModifier = '', userName, date, view, tribeId }) => {
  const profileImg = getProfileImg(tribeId)[0];
  const profileImgName = getProfileImg(tribeId)[1];

  return (
    <PostWrapper>
      <div className='wrapper'>
        <div className='profile'>
          <div className='profileImg'>
            <img src={profileImg} alt={profileImgName} />
          </div>
        </div>
        <div className='info'>
          <div>{userName}</div>
          <div className='wrapper'>
            <div>{date}시간 전</div>
            <div>·</div>
            <div>조회 {view}</div>
          </div>
        </div>
        <div className='tok'>
          <div>
            <button className='tokIcon'>
              <img src={IconChat} alt='IconChat' />
            </button>
          </div>
        </div>
        <div className='more'>
          <div className='moreIcon'></div>
        </div>
      </div>
    </PostWrapper>
  );
};

export default PostHeader;

const getProfileImg = (id) => {
  const img = [];

  switch (id) {
    // 호랑이
    case '1':
      img.push(tiger);
      img.push('호랑이');
      break;
    // 하마
    case '2':
      img.push(hippo);
      img.push('하마');
      break;
    // 코끼리
    case '3':
      img.push(elephant);
      img.push('코끼리');
      break;
    // 공룡
    case '4':
      img.push(dino);
      img.push('공룡');
      break;
    // 사자
    case '5':
      img.push(lion);
      img.push('사자');
      break;
    // 옥소
    default:
      break;
  }
  return img;
};

const PostWrapper = styled.div`
  .wrapper {
    display: grid;
    grid-template-columns: 40px 552px 32px 43px;
  }

  .tokIcon {
    border: none;
    width: 32px;
    height: 32px;
    img {
      width: inherit;
      height: inherit;
      display: block;
    }
  }

  .moreIcon {
    width: 40px;
    height: 40px;
    background-color: black;

    border-radius: 50%;
  }

  .info .wrapper {
    display: flex;
    flex-direction: row;
  }
`;
