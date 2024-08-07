"use client";

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';
import { Editor } from 'codemirror';

// Динамический импорт SimpleMdeReact
const SimpleMdeReact = dynamic(() => import('react-simplemde-editor'), { ssr: false });

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

  // codemirror instance
  const [codemirrorInstance, setCodemirrorInstance] = useState<Editor | null>(
    null,
  );
  const getCmInstanceCallback = useCallback((editor: Editor) => {
    setCodemirrorInstance(editor);
  }, []);

  if (typeof window === 'undefined') {
    return null; // or a placeholder
  }

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
