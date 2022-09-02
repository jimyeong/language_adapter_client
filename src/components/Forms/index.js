import React, { memo } from 'react';
import TextInput from './TextInput';
import LabelingTextInput from './LabelingTextInput';
import Searchbar from './Searchbar';
import LabelingBox from './LabelingBox';

const Forms = {};
Forms.TextInput = memo(TextInput);
Forms.LabelingTextInput = memo(LabelingTextInput);
Forms.Searchbar = memo(Searchbar);
Forms.LabelingBox = memo(LabelingBox);
export default Forms;
