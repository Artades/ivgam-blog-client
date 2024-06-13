import React, { useCallback, useEffect, useMemo, useState } from 'react';
import SimpleMdeReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { Editor, Position } from 'codemirror';

interface MdEditorCustomProps {
  field: {
    value: string;
    onChange: (text: string) => void;
  };
}

const MdEditorCustom: React.FC<MdEditorCustomProps> = ({ field }) => {
  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
    } as EasyMDE.Options;
  }, []);

  // easyMDE instance
  const [simpleMdeInstance, setMdeInstance] = useState<EasyMDE | null>(null);

  const getMdeInstanceCallback = useCallback((simpleMde: EasyMDE) => {
    setMdeInstance(simpleMde);
  }, []);

  useEffect(() => {
    if (simpleMdeInstance) {
      console.info("Hey I'm editor instance!", simpleMdeInstance);
    }
  }, [simpleMdeInstance]);

  // codemirror instance
  const [codemirrorInstance, setCodemirrorInstance] = useState<Editor | null>(
    null,
  );
  const getCmInstanceCallback = useCallback((editor: Editor) => {
    setCodemirrorInstance(editor);
  }, []);

  useEffect(() => {
    if (codemirrorInstance) {
      console.info("Hey I'm codemirror instance!", codemirrorInstance);
    }
  }, [codemirrorInstance]);

  // line and cursor
  const [lineAndCursor, setLineAndCursor] = useState<Position | null>(null);

  const getLineAndCursorCallback = useCallback((position: Position) => {
    setLineAndCursor(position);
  }, []);

  useEffect(() => {
    if (lineAndCursor) {
      console.info("Hey I'm line and cursor info!", lineAndCursor);
    }
  }, [lineAndCursor]);

  return (
    <SimpleMdeReact
      value={field.value}
      onChange={field.onChange}
      options={autofocusNoSpellcheckerOptions}
      getMdeInstance={getMdeInstanceCallback}
      getCodemirrorInstance={getCmInstanceCallback}
    />
  );
};

export default MdEditorCustom;
