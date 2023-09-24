import React from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "../../ckeditor"

interface EditorProps {
  value: string,
  onChange: (value: string) => void;
}

const Editor = ({ value, onChange } : EditorProps) => {
  return (
    
    <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
  );
};

export default Editor;