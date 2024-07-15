'use client'

import { faBold, faItalic, faQuoteRightAlt, faUnderline } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-tailwind/react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { forwardRef, useEffect } from 'react'
import Placeholder from '@tiptap/extension-placeholder'

const Tiptap = ({onContentChange, currentContent, setCurrentContent, refEditor}) => {

  const editor = useEditor({
    extensions: [StarterKit, Underline,       
        Placeholder.configure({
        placeholder: 'Write something …',
      }),],
    immediatelyRender: false,
    content: '',
    onUpdate: ({ editor }) => {
        const html = editor.getHTML();
        onContentChange(html)
      },
  })


  useEffect(() => {

    

    console.log('in use effect')
    if (currentContent) {
      editor?.commands?.setContent(currentContent)
      editor?.commands?.focus('end');
      editor?.commands?.keyboardShortcut('Enter');
      editor?.commands?.keyboardShortcut('Enter');
      setCurrentContent(null)

     // Move the cursor to the end of the content
 
    }
  }, [currentContent])
  

  if (!editor) {
    return null;
  }

  return (
    <>
    <div className='flex items-center'>
    <input ref={refEditor} className='h-0 w-0  flex-none'/>
     <Button
          variant="outlined"
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={` rounded-none p-2 border-none font-extrabold ${editor.isActive('bold') ? 'bg-black text-white' : ''}`}

        >
          <FontAwesomeIcon icon={faBold}/>
        </Button>
        <Button
          variant="outlined"
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={` rounded-none p-2 border-none italic ${editor.isActive('italic') ? 'bg-black text-white' : ''}`}

        >
          <FontAwesomeIcon icon={faItalic}/>
        </Button>
        <Button
          variant="outlined"
          size="sm"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleUnderline()
              .run()
          }
          className={` rounded-none p-2 border-none italic ${editor.isActive('underline') ? 'bg-black text-white' : ''}`}

        >
          <FontAwesomeIcon icon={faUnderline}/>
        </Button>

        <Button
          variant="outlined"
          size="sm"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBlockquote()
              .run()
          }
          className={` rounded-none p-2 border-none ${editor.isActive('blockquote') ? 'bg-black text-white' : ''}`}
        >
            <FontAwesomeIcon icon={faQuoteRightAlt}/>
        </Button>
        </div>
   
  <EditorContent editor={editor} className='mt-1 [&_.tiptap]:p-2 [&_.tiptap]:rounded-md  [&_.ProseMirror_blockquote]:pl-4 [&_.ProseMirror_blockquote]:border-l-2 [&_.ProseMirror_blockquote]:border-l-blue-gray-500 [&_.ProseMirror_blockquote]:bg-blue-gray-100 [&_.tiptap]:border-2 [&_.tiptap]:border-black [&_.tiptap]:min-h-28'/>
  </>
)
}

export default Tiptap