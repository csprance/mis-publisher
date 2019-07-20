import CloseIcon from '@material-ui/icons/CloseOutlined';
import MaximizeIcon from '@material-ui/icons/CropSquareRounded';
import MinimizeIcon from '@material-ui/icons/Remove';
import MenuIcon from '@material-ui/icons/Menu';
import { remote } from 'electron';
import * as React from 'react';
import styled from 'styled-components';

export const ButtonBase = styled.button`
  color: #e3e3e3;
  outline: none;
  width: 30px;
  height: 25px;
  border: none;
  background-color: ${(props: { bg: string }) => props.bg};
  cursor: pointer;
  -webkit-app-region: no-drag;
  transition-duration: 0.2s;
  position: relative;
  display: flex;
  top: -2px;
  align-items: center;
  justify-content: center;
`;

interface Props {
  menuClick?: () => void;
  readonly type: 'minimize' | 'maximize' | 'close' | 'menu';
}
interface State {
  readonly bg: string;
}
class TitleBarButton extends React.Component<Props, State> {
  public static defaultProps = {};
  public hoverColorClose: string;
  public hoverColor: string;
  public bgColor: string;
  public state: State = {
    bg: 'transparent',
  };

  public constructor(props: Props) {
    super(props);
    this.hoverColorClose = '#ee4646';
    this.hoverColor = '#4d4d4d';
    this.bgColor = 'transparent';
  }

  public handleClick = () => {
    const focusedWindow = remote.BrowserWindow.getFocusedWindow();
    if (!focusedWindow) {
      return false;
    }
    switch (this.props.type) {
      case 'minimize':
        return focusedWindow.minimize();
      case 'maximize':
        if (focusedWindow.isMaximized()) {
          return focusedWindow.unmaximize();
        } else {
          return focusedWindow.maximize();
        }
      case 'close':
        return focusedWindow.close();
      case 'menu':
        return this.props.menuClick ? this.props.menuClick() : false;
      default:
        break;
    }
  };

  public handleMouserEnter = () => {
    this.setState({
      bg: this.props.type === 'close' ? this.hoverColorClose : this.hoverColor,
    });
  };

  public handleMouseLeave = () => {
    this.setState({
      bg: this.bgColor,
    });
  };

  public render() {
    return (
      <ButtonBase
        bg={this.state.bg}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouserEnter}
        onClick={this.handleClick}
      >
        {this.props.type === 'close' && <CloseIcon style={{ width: 20 }} />}
        {this.props.type === 'minimize' && (
          <MinimizeIcon style={{ width: 20 }} />
        )}
        {this.props.type === 'maximize' && (
          <MaximizeIcon style={{ width: 20 }} />
        )}
        {this.props.type === 'menu' && <MenuIcon style={{ width: 20 }} />}
      </ButtonBase>
    );
  }
}

export default TitleBarButton;
