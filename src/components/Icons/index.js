import styled, { css } from 'styled-components';
import { ReactComponent as WordBallon } from '../../assets/svgs/WordBallon.svg';
import { ReactComponent as HomeVector } from '../../assets/svgs/HomeVector.svg';
import { ReactComponent as GraphVector } from '../../assets/svgs/GraphVector.svg';
import { ReactComponent as BookVector } from '../../assets/svgs/BookVector.svg';
import { ReactComponent as DotsVector } from '../../assets/svgs/DotsVector.svg';
import { ReactComponent as EmergencyKit } from '../../assets/svgs/EmergencyKit.svg';
import { ReactComponent as PolygonsVector } from '../../assets/svgs/PolygonsVector.svg';
import { ReactComponent as ShirtVector } from '../../assets/svgs/ShirtVector.svg';
import { ReactComponent as TruckVector } from '../../assets/svgs/TruckVector.svg';
import { ReactComponent as NHBankLogo } from '../../assets/svgs/NHBankLogo.svg';
import { ReactComponent as _HeartIcon } from '../../assets/svgs/HeartVector.svg';
import { ReactComponent as _SearchingIcon } from '../../assets/svgs/SearchingVector.svg';
import { ReactComponent as _HeartBookVector } from '../../assets/svgs/HeartBookVector.svg';
import { ReactComponent as _VolumeShapeVector } from '../../assets/svgs/VolumeShapeVector.svg';
import { ReactComponent as _FAQVector } from '../../assets/svgs/FAQVector.svg';
import { ReactComponent as _CandyVector } from '../../assets/svgs/CandyVector.svg';
import { ReactComponent as _CalandarVector } from '../../assets/svgs/CalandarVector.svg';
import { ReactComponent as _Arrow } from '../../assets/svgs/Arrow.svg';
import { ReactComponent as _Circle } from '../../assets/svgs/Circle.svg';
import { ReactComponent as _PlusIcon } from '../../assets/svgs/Plus.svg';
import { ReactComponent as _TrashCanVector } from '../../assets/svgs/TrashCanVector.svg';
import { ReactComponent as _HeartCart } from '../../assets/svgs/HeartCart.svg';
import { ReactComponent as _Export } from '../../assets/svgs/Export.svg';
import { BaseLayoutConfig } from '../../components/globalUIconfig';
import { HiOutlinePencilAlt } from 'react-icons/ai';
/* 
import { ReactComponent as _CharacterButtonTypeScholar } from '../../assets/svgs/CharacterButtonTypeScholar.svg';
import { ReactComponent as _CharacterButtonTypeLoan } from '../../assets/svgs/CharacterButtonTypeLoan.svg';
import { ReactComponent as _CharacterButtonTypeCoUp } from '../../assets/svgs/CharacterButtonTypeCoUp.svg'; */

import {
    AiOutlinePlayCircle,
    AiOutlineCloseCircle,
    AiOutlinePlus,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillSafetyCertificate,
    AiOutlineEdit,
} from 'react-icons/ai';
import { BsPencilSquare, BsInfoCircle } from 'react-icons/bs';
import { FiAlertOctagon } from 'react-icons/fi';
import { GoCheck } from 'react-icons/go';
import { FaFacebook, FaSearch } from 'react-icons/fa';
import { BiTrash, BiEdit } from 'react-icons/bi';

import helper from '../../helper';
import cn from 'classnames';

const { pixelToRem, setColor } = helper;
const { primaryColor, breakPoint } = BaseLayoutConfig;

// 가로선
export const HorizonLine = styled.span`
    display: block;
    width: 100%;
    height: 1px;
    width: 100%;
    background-color: ${primaryColor};
    margin-top: ${(props) => pixelToRem(props.mt)};
`;

export const VideoPlayIcon = styled(AiOutlinePlayCircle)`
    width: ${(props) => pixelToRem(props.width)};
    height: ${(props) => pixelToRem(props.width)};
    fill: ${(props) => props.fill};
    transition: all 0.1s linear;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        fill: ${(props) => setColor(props.fill, -50)};
    }
    &:active {
        fill: #fff;
    }
`;

export const CircleImageFrame = styled.div`
    display: inline-block;
    width: ${(props) => pixelToRem(props.width)};
    height: ${(props) => pixelToRem(props.height)};
    line-height: ${(props) => pixelToRem(props.height)};
    border-radius: 50%;
    background-color: #ff5252;
    color: #ececec;
    text-align: center;
    color: white;
    overflow: hidden;
    @media only screen and (max-width: ${breakPoint}) {
        width: ${(props) => pixelToRem(props.mWidth)};
        height: ${(props) => pixelToRem(props.mHeight)};
        line-height: ${(props) => pixelToRem(props.mHeight)};
    }
    ${(props) =>
        props.userImage &&
        css`
            background: url(${props.userImage}) 50% 50% / cover no-repeat;
        `}
    ${(props) =>
        props.fontSize &&
        css`
            font-size: ${pixelToRem(props.fontSize)};
        `}
`;

const LoginState = styled.span`
    width: ${(props) => (props.size ? props.size : '1rem')};
    height: ${(props) => (props.size ? props.size : '1rem')};
    border-radius: 50%;
    background-color: ${(props) =>
        props.backgroundColor ? props.backgroundColor : '#c8c7c8'};
    display: inline-block;
    &.green {
        background-color: #86bb71;
    }
    &.red {
        background-color: #e38968;
    }
`;
export function LoginStateIcon({ className, size, height, color }) {
    return (
        <LoginState size="8px" className={cn([color, 'status__icon'])}>
            {null}
        </LoginState>
    );
}

export const CloseRounded = styled(AiOutlineCloseCircle)`
    width: ${(props) => pixelToRem(props.size)};
    height: ${(props) => pixelToRem(props.size)};
    fill: ${(props) => props.fill};
    &:hover {
        fill: ${(props) => setColor(props.fill, 20)};
    }
    &:active {
        fill: ${(props) => setColor(props.fill, -20)};
    }
`;

export const ErrorMessageIconAlert = styled(FiAlertOctagon)`
    width: ${(props) => pixelToRem(props.size)};
    height: ${(props) => pixelToRem(props.size)};
    fill: ${(props) => props.fill};
`;
export const SuccessMessageIconAlert = styled(GoCheck)`
    width: ${(props) => pixelToRem(props.size)};
    height: ${(props) => pixelToRem(props.size)};
    fill: ${(props) => props.fill};
`;

export const InfoMessageIconAlert = styled(BsInfoCircle)`
    width: ${(props) => pixelToRem(props.size)};
    height: ${(props) => pixelToRem(props.size)};
    fill: ${(props) => props.fill};
`;

export const PlugIcon = styled(AiOutlinePlus)`
    width: ${(props) => pixelToRem(props.size)};
    height: ${(props) => pixelToRem(props.size)};
    fill: ${(props) => props.fill};
`;

export const BSWriteIcon = styled(BsPencilSquare)`
    width: ${(props) => pixelToRem(props.size)};
    height: ${(props) => pixelToRem(props.size)};
    fill: ${(props) => props.fill};
`;

export const BiEditIcon = styled(BiEdit)`
    width: ${(props) => pixelToRem(props.size)};
    height: ${(props) => pixelToRem(props.size)};
    fill: ${(props) => props.fill};
    &:active {
        fill: ${(props) => setColor(props.fill, -40)};
    }
    &:hover {
        fill: ${(props) => setColor(props.fill, 20)};
    }
`;

export const AIInstaIcon = styled(AiOutlineInstagram)`
    width: ${(props) => pixelToRem(props.size)};
    height: ${(props) => pixelToRem(props.size)};
    fill: ${(props) => props.fill};
    &:active {
        fill: ${(props) => setColor(props.fill, -40)};
    }
    &:hover {
        fill: ${(props) => setColor(props.fill, 20)};
    }
`;

export const AiOutlineTwitterIcon = styled(AiOutlineTwitter)`
    width: ${(props) => pixelToRem(props.size)};
    height: ${(props) => pixelToRem(props.size)};
    fill: ${(props) => props.fill};
    &:active {
        fill: ${(props) => setColor(props.fill, -40)};
    }
    &:hover {
        fill: ${(props) => setColor(props.fill, 20)};
    }
`;

export const FaFacebookIcon = styled(FaFacebook)`
    width: ${(props) => pixelToRem(props.size)};
    height: ${(props) => pixelToRem(props.size)};
    fill: ${(props) => props.fill};
    &:active {
        fill: ${(props) => setColor(props.fill, -40)};
    }
    &:hover {
        fill: ${(props) => setColor(props.fill, 20)};
    }
`;

export const BaseWordBalloon = styled(WordBallon)`
    width: ${(props) => pixelToRem(props.size)};
    height: auto;
    fill: ${(props) => props.fill};
    &:active {
        fill: ${(props) => setColor(props.fill, -40)};
    }
    &:hover {
        fill: ${(props) => setColor(props.fill, 20)};
    }
`;
export const HomeIcon = styled(HomeVector)`
    stroke: ${(props) => props.stroke};
`;
export const GraphIcon = styled(GraphVector)`
    stroke: ${(props) => props.stroke};
`;
export const BookIcon = styled(BookVector)`
    stroke: ${(props) => props.stroke};
`;
export const DotsIcon = styled(DotsVector)`
    stroke: ${(props) => props.stroke};
`;
export const EmergencyKitIcon = styled(EmergencyKit)`
    stroke: ${(props) => props.stroke};
`;
export const PolygonsIcon = styled(PolygonsVector)`
    stroke: ${(props) => props.stroke};
`;
export const ShirtIcon = styled(ShirtVector)`
    stroke: ${(props) => props.stroke};
`;
export const TruckIcon = styled(TruckVector)`
    stroke: ${(props) => props.stroke};
`;

export const _NHBankLogo = styled(NHBankLogo)``;

const HeartIcon = styled(_HeartIcon)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};
    &.is-active {
        stroke: ${BaseLayoutConfig.primaryColor};
        fill: ${BaseLayoutConfig.primaryColor};
    }
`;
/* size control */
export const EHeartIcon = ({ stroke, fill, ...rest }) => (
    <div className="svg__ctrl">
        <HeartIcon stroke={stroke} fill={fill} {...rest} />
    </div>
);

const SearchingIcon = styled(_SearchingIcon)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};
`;

export const ESearchingIcon = ({ stroke, fill, ...rest }) => {
    return (
        <div className="svg__ctrl">
            <SearchingIcon stroke={stroke} fill={fill} {...rest} />
        </div>
    );
};

export const EHeartBookIcon = styled(_HeartBookVector)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};
`;
export const FAQIcon = styled(_FAQVector)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};
`;
export const VolumeShapeIcon = styled(_VolumeShapeVector)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};
`;

export const CandyIcon = styled(_CandyVector)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};
`;

export const CalandarIcon = styled(_CalandarVector)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};
`;

export const ArrowIcon = styled(_Arrow)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};

    ${(props) =>
        props.right &&
        css`
            transform: rotate(180deg);
        `}
    ${(props) =>
        props.left &&
        css`
            transform: rotate(0);
        `}
  ${(props) =>
        props.down &&
        css`
            transform: rotate(270deg);
        `}
  ${(props) =>
        props.up &&
        css`
            transform: rotate(90deg);
        `}
`;

export const CircleIcon = styled(_Circle)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};
`;
export const PlusIcon = styled(_PlusIcon)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};
    &:active {
        fill: ${(props) => setColor(props.fill, 20)};
    }
`;
export const TrashCanIcon = styled(_TrashCanVector)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};
    &:active {
        fill: ${(props) =>
            setColor(
                props.fill ? props.fill : BaseLayoutConfig.primaryColor,
                20
            )};
    }
`;
export const HeartCartIcon = styled(_HeartCart)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};
    height: 30px;
`;
export const ExportIcon = styled(_Export)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};
`;

export const PencilIcon = styled(AiOutlineEdit)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};
`;

export const IconSearch = styled(FaSearch)`
    stroke: ${(props) =>
        props.stroke ? props.stroke : BaseLayoutConfig.primaryColor};
    fill: ${(props) =>
        props.fill ? props.fill : BaseLayoutConfig.primaryColor};
`;

/* export const ScholarTypeCharacter = styled(_CharacterButtonTypeScholar)``;
export const LoanTypeCharacter = styled(_CharacterButtonTypeLoan)``;
export const CoUpTypeCharacter = styled(_CharacterButtonTypeCoUp)``; */

export const setSizeableIcon = (Icon) => (
    <div className="svg__ctrl">{Icon}</div>
);
