import { Divider, Input } from 'antd';

export function Search({ filterFoods }) {
  
  const handleChange = (event) => {
    filterFoods(event.target.value.toLowerCase());
  } 

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={handleChange} />
    </>
  );
}