import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setModalVisible } from '../app/modules/authSlice';

export function useAuth() {
  const dispatch = useAppDispatch();
  const { user, modalVisible } = useAppSelector(state => state.auth);

  const handleChangeModalVisible = () => {
    modalVisible
      ? dispatch(setModalVisible(false))
      : dispatch(setModalVisible(true));
  };

  return { user, modalVisible, handleChangeModalVisible };
}
