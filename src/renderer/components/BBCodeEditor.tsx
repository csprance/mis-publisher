import * as React from 'react';
import styled from 'styled-components';
import converter from 'draft-js-bbcode-converter';
import Button from '@material-ui/core/Button';
import { convertToRaw, Editor, EditorState, RichUtils } from 'draft-js';

const EditorWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  bottom: 5px;
  left: 0;
  width: 100%;
  overflow: auto;
  padding: 5px;
  box-sizing: border-box;
  & .DraftEditor-root {
    height: 100%;
  }
`;
const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
`;

interface Props {}
const BBCodeEditor: React.FunctionComponent<Props> = ({}) => {
  const [editorState, setState] = React.useState(EditorState.createEmpty());
  const handleKeyCommand = (command: any, _editorState: any) => {
    const newState = RichUtils.handleKeyCommand(_editorState, command);
    if (newState) {
      setState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onChange = (_editorState: EditorState) => {
    const contentState = _editorState.getCurrentContent();
    const bbcodeString = converter.bbcodeExport(contentState);
    console.log(bbcodeString);
    setState(_editorState);
  };

  return (
    <>
      <ButtonWrapper>
        <Button
          onClick={() =>
            setState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
          }
        >
          BOLD
        </Button>

        <Button
          onClick={() =>
            setState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
          }
        >
          ITALIC
        </Button>
      </ButtonWrapper>

      <EditorWrapper>
        <Editor
          handleKeyCommand={handleKeyCommand}
          editorState={editorState}
          onChange={onChange}
        />
      </EditorWrapper>
    </>
  );
};

export default BBCodeEditor;
