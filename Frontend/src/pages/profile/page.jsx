import { ProfileDashboard } from "@/components/users/profile-dashboard";
import { kundliHistory, profileStats, userProfile } from "@/lib/dashboard-data";
import { useKundliStore } from "@/lib/store";

export default function ProfilePage() {
    const currentUser = useKundliStore((state) => state.currentUser);

    // Merge real database user details with additional visual/dashboard fields
    const user = {
        ...userProfile,
        name: currentUser?.name || userProfile.name,
        email: currentUser?.email || userProfile.email,
        phone: currentUser?.phone || userProfile.phone || "",
        bio: currentUser?.bio || userProfile.bio || "",
        location: currentUser?.placeOfBirth || userProfile.location || "",
        avatar: currentUser?.avatar || userProfile.avatar,
    };

    return <ProfileDashboard user={user} stats={profileStats} history={kundliHistory}/>;
}
