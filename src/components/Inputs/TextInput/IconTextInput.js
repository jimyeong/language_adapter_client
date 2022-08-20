import React from 'react';
import styled from 'styled-components';
import BaseTextInput from '../BaseTextInput';
import cn from 'classnames';
import helper from '../../../helper';

const { pixelToRem } = helper;
const IconTextInputBlock = styled.div`
    position: relative;
    .input__ctrl {
        border-radius: 5px;
        height: ${pixelToRem(26)};
        padding: 0 ${pixelToRem(10)};
    }
    .icon__frame {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    &.type-left {
        .input__ctrl {
            padding-left: ${pixelToRem(30)};
        }
        .icon__frame {
            left: ${pixelToRem(10)};
            display: inline-block;
            width: ${pixelToRem(16)};
        }
    }
    &.type-right {
        .input__ctrl {
            padding-right: ${pixelToRem(30)};
        }
        .icon__frame {
            right: ${pixelToRem(10)};
        }
    }
`;

const IconTextInput = ({
    icon,
    iconPosition = 'left',
    onChange,
    onKeyPress,
    value,
    children,
    name,
    ...rest
}) => {
    const Icon = icon;
    const renderView = (Icon, iconPosition) => {
        if (iconPosition === 'right') {
            return (
                <IconTextInputBlock {...rest} className="type-right">
                    <BaseTextInput
                        className={cn(['input__ctrl'])}
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                        value={value}
                        name={name}
                    />
                    <div className="icon__frame type-right">
                        <Icon />
                    </div>
                </IconTextInputBlock>
            );
        } else {
            return (
                <IconTextInputBlock {...rest} className="type-left">
                    <div className="icon__frame">
                        <Icon />
                    </div>
                    <BaseTextInput
                        className={cn(['input__ctrl'])}
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                        value={value}
                        name={name}
                    />
                </IconTextInputBlock>
            );
        }
    };
    return renderView(Icon, iconPosition);
};

export default IconTextInput;
