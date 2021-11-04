import { Stack } from "@mui/material";
import DashboardNavBar from "./DashboardNavBar";
import ReviewCard from "./ReviewCard";
import ReviewCard01 from "./ReviewCard01";

const UserDashboard = () => {
    return (
        <div>
            <DashboardNavBar />
            <Stack maxWidth="xs" spacing={1}  direction="column" alignItems="center" marginTop={12}>
                <ReviewCard />
                <ReviewCard01 />
            </Stack>
        </div>
    );
}

export default UserDashboard;