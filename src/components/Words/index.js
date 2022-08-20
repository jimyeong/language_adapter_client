import React from 'react';
import helper from '../../helper';

const { dateBasicFormatter } = helper;
function Words({ words }) {
    return (
        <div>
            {words.map((word, key) => {
                return (
                    <div key={key}>
                        <div>{word.origin_expression}</div>
                        <div>
                            {word.converted_expression || (
                                <b>등록된 표현이 없습니다, 등록하시겠습니까</b>
                            )}
                        </div>
                        <div>
                            {dateBasicFormatter(new Date(word.created_at))}
                        </div>
                        <p>{word.usage}</p>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default Words;
