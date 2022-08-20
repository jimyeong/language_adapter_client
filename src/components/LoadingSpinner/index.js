import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { BaseLayoutConfig } from '../globalUIconfig';

const LoaderBlock = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

function LoadingSpinner() {
    return (
        <LoaderBlock>
            <Loader
                type="MutatingDots"
                height={100}
                width={100}
                color={BaseLayoutConfig.primaryColor}
                secondaryColor={BaseLayoutConfig.secondaryColor}
                radius={12.5}
                timeout={3000}
            />
        </LoaderBlock>
    );
}

export default LoadingSpinner;
