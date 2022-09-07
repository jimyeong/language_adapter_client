import React, { memo } from 'react';
import TextInput from './TextInput';
import LabelingTextInput from './LabelingTextInput';
import Searchbar from './Searchbar';
import LabelingBox from './LabelingBox';
import ButtonLabelingBox from './ButtonLabelingBox';

const Forms = {};
Forms.TextInput = memo(TextInput);
Forms.LabelingTextInput = memo(LabelingTextInput);
Forms.Searchbar = memo(Searchbar);
Forms.LabelingBox = memo(LabelingBox);
Forms.ButtonLabelingBox = memo(ButtonLabelingBox);
export default Forms;
