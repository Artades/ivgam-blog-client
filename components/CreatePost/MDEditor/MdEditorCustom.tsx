import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor, { Plugins } from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import styles from './MDEditor.module.css';

MdEditor.use(Plugins.FontItalic);

interface MdEditorCustomProps {
  field: {
    value: string;
    onChange: (text: string) => void;
  };
}

const MdEditorCustom: React.FC<MdEditorCustomProps> = ({ field }) => {
  const mdParser = new MarkdownIt();

  return (
    <MdEditor
      className={styles.mdEditor}
      value={field.value}
      renderHTML={(text) => mdParser.render(text)}
      onChange={({ text }) => field.onChange(text)}
    />
  );
};

export default MdEditorCustom;
