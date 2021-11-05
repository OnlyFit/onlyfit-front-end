import { Stack } from "@mui/material";
import DashboardNavBar from "./DashboardNavBar";
import ReviewCard from "./ReviewCard";

const UserDashboard = () => {
    return (
        <div>
            <DashboardNavBar />
            <Stack maxWidth="xs" spacing={1}  direction="column" alignItems="center" marginTop={12}>
                <ReviewCard />
            </Stack>
        </div>
    );
}

export default UserDashboard;