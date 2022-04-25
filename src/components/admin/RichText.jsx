import JoditEditor from "jodit-react";
import { useRef } from "react";

const RichText = ({ setValue, value }) => {
  const editor = useRef(null);
  return (
    <JoditEditor
      ref={editor}
      onChange={(content) => setValue(content)}
      value={value}
    />
  );
};

export default RichText;
