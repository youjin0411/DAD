import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import axios from 'axios';

const CreatableAdvanced = (props) => {
  const [options, setOptions ] = useState([]); // 컴포넌트 속성에서 옵션 목록 가져오기
  const [value, setValue] = useState(null); // 선택된 값 저장
  const [isLoading, setIsLoading] = useState(false); // 생성 중임을 나타내는 로딩 상태
  useEffect(() => {
    console.log(props.options)
    setOptions(props.options); // This updates the state asynchronously
  }, []);
  const techCompanies = [
    { label: "보름달", value: 1 },
    { label: "상현달", value: 2 },
    { label: "하현달", value: 3 },
    { label: "그믐달", value: 4 },
    { label: "초승달", value: 5 },
  ];

  useEffect(() => {
    localStorage.setItem(props.select, JSON.stringify(value));
  }, [value]);

  // 선택 박스 값이 변경될 때 호출되는 함수
  const handleChange = (newValue, actionMeta) => {
    localStorage.setItem(props.select, JSON.stringify(newValue));
    setValue(newValue); // 변경된 값을 저장
  };

  // 새 옵션 생성 시 호출되는 함수
  const handleCreate = (inputValue) => {
    try {
      const { options, select } = props; // 컴포넌트 속성에서 옵션 목록 가져오기
      setOptions(props.options); // 컴포넌트 속성에서 옵션 목록 가져오기
      const response = axios.post("http://localhost:3001/options", {
        inputValue: inputValue,
        select: select
      });
      const newOption = { label: inputValue, value: options.length + 1 };
      // 기존 옵션 목록에 새 옵션을 추가하여 새 옵션 목록 생성
      const newOptions = [...options, newOption];
      // 새 옵션 목록으로 업데이트
      setOptions(newOptions);
      // 선택된 값 업데이트
      setValue(newOption);
    } catch (error) {
        console.error("오류 발생:", error);
    }
  };

    // 커스텀 스타일 정의
    const customStyles = {
      control: (provided) => ({
        ...provided,
        width: '22.7vw', // 선택 박스의 너비 설정
        height: '4vh',
        marginTop: '1vw',
        paddingLeft: '10px',
        outline: 'none',
        border: '1px solid #828282',
        borderRadius: '0.5vw',
        fontSize: '0.8vw',
      }),
      menu: (provided) => ({
        ...provided,
        width: '24vw', // 메뉴의 너비 설정
      }),
    };
    return (
      <div style={{ width: '24vw' }}>
        {/* CreatableSelect 컴포넌트 렌더링 */}
        <CreatableSelect
          styles={customStyles}
          isClearable
          isDisabled={isLoading}
          isLoading={isLoading}
          onChange={handleChange} // 선택 박스 값이 변경될 때 호출되는 함수
          onCreateOption={handleCreate}
          options={techCompanies} // Flatten the nested arrays
          value={value}
          placeholder="직접 입력"
        />
      </div>
    );
  }

export default CreatableAdvanced;