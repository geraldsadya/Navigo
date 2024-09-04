import { useCallback, useState } from "react";
import { useMemo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppLoader from "../../components/layout/AppLoader";
import useApp from "../../hooks/useApp";
import useStore from "../../store";
import BoardInterface from "./BoardInterface";
import BoardNotReady from "./BoardNotReady";
import BoardTopbar from "./BoardTopbar";

const BoardScreen = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);
  const { boards, areBoardsFetched } = useStore();
  const { boardId } = useParams();
  const { fetchBoard, deleteBoard } = useApp();
  const board = useMemo(() => boards.find((b) => b.id === boardId), []);

  const boardData = useMemo(() => data, [data]);

  const handleDeleteBoard = useCallback(async () => {
    if (!window.confirm("Do you want to delete this board?")) return;
    try {
      setLoading(true);
      await deleteBoard(boardId);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  const handleUpdateLastUpdated = useCallback(
    () => setLastUpdated(new Date().toLocaleString("en-US")),
    []
  );

  const handleFetchBoard = async () => {
    try {
      const boardData = await fetchBoard(boardId);
      console.log('Fetched boardData:', boardData);  // Log the fetched data
      
      if (boardData) {
        const { createdAt, tabs } = boardData;
  
        // Handle createdAt (check if it's a valid Timestamp)
        if (createdAt && createdAt.toDate) {
          setLastUpdated(createdAt.toDate().toLocaleString("en-US"));
        } else if (typeof createdAt === "string") {
          console.warn("createdAt is a string, converting it manually");
          setLastUpdated(createdAt);  // For now, display the string
        } else {
          console.warn("createdAt is missing or invalid");
          setLastUpdated("Unknown");
        }
  
        if (tabs) {
          setData(tabs);  // Assuming tabs is part of the fetched data
        } else {
          console.warn("Tabs data is missing");
          setData(null);  // No tabs available, so show BoardNotReady
        }
      } else {
        console.warn("Board data is missing");
        setData(null);  // If no data, show BoardNotReady
      }
  
      setLoading(false);
    } catch (err) {
      console.error("Error fetching board:", err);
      setLoading(false);
    }
  };
  
  
  
  

  useEffect(() => {
    console.log("areBoardsFetched:", areBoardsFetched);
  console.log("board:", board);
    if (!areBoardsFetched || !board) navigate("/boards");
    else handleFetchBoard();
  }, []);

  if (!board) return null;
  if (loading) return <AppLoader />;
  if (!data) {
    console.log("Board data is not available. Showing BoardNotReady component.");
    return <BoardNotReady />;
  }
  

  return (
    <>
      <BoardTopbar
        name={board.name}
        color={board.color}
        lastUpdated={lastUpdated}
        deleteBoard={handleDeleteBoard}
      />
      <BoardInterface
        boardData={boardData}
        boardId={boardId}
        updateLastUpdated={handleUpdateLastUpdated}
      />
    </>
  );
};

export default BoardScreen;
