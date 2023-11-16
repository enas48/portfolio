
import { useState, useEffect } from "react";
import { WithContext as ReactTags } from "react-tag-input";


export const TagInput = (props) => {
  const [tags, setTags] = useState([]);
  const suggestions = [
    {
      id: 'html',
      text:'html'
    },
    {
      id: 'css',
      text:'css'
    },
    {
      id: 'javascript',
      text:'javascript'
    },
    {
      id: 'jquery',
      text:'jquery'
    },
    {
      id: 'react',
      text:'react'
    },
    {
      id: 'redux',
      text:'redux'
    },
    {
      id: 'angular',
      text:'angular'
    },
    {
      id: 'php',
      text:'php'
    },
    {
      id: 'laravel',
      text:'laravel'
    },
    {
      id: 'nodejs',
      text:'nodejs'
    },
    {
      id:'mongodb',
      text:'mongodb'
    }
    ,
    {
      id:'tailwind',
      text:'tailwind'
    }
  ];
  const KeyCodes = {
    comma: 188,
    enter: 13
  };
  
  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
    const alltags = tags.filter((tag, index) => index !== i);
    props.onAddTag(alltags);
  };
  const handleAddition = (tag) => {
    setTags([...tags, tag]);
    props.onAddTag([...tags, tag]);
  };
  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    // re-render
    setTags(newTags);
    props.onAddTag(newTags);
  };

  useEffect(() => {
    
if(Array.isArray(props.tags)){
  setTags(props.tags)
  props.onAddTag(props.tags);
}

  }, [props.tags]);
  return (
    <>
    <label>{props.placeholder}</label>
      <ReactTags
        tags={tags}
        delimiters={delimiters}
        suggestions={suggestions}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        inputFieldPosition="bottom"
        autocomplete
        placeholder={props.placeholder}
      />
    </>
  );
};


