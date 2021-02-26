import './App.css';
import Header from './components/Header/Header';
import { CSVLink } from "react-csv";
import DataSource from './components/Data/TableData';
import Table from './components/Table/Table';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Button className="primary-button" size="large" type="primary">
        <CSVLink data={DataSource}>CSV Export</CSVLink>
      </Button>
    </div>
  );
}

export default App;
