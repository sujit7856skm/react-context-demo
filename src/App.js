
import BookList from './components/BookList';
import Header from './components/Header';
import { useConfig } from './contexts/ConfigProvider';
import CustomModal from './shared/Modal';
import { useStyles } from './styles';

function App() {
  const styles = useStyles();
  const { modal } = useConfig();
  return (
    
    <div className={styles.app}>
      <Header />
      <BookList />
      {modal.open && (
        <CustomModal data={modal?.data} />
      )}
    </div>
  );
}

export default App;
