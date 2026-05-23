"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Edit3, ShoppingBag, Star, Zap } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { QuickActionsPanel } from "@/components/dashboard/quick-actions-panel";
import { StatCard } from "@/components/cards/stat-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
export function ProfileDashboard({ user, stats, history }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formState, setFormState] = useState({
        name: user.name,
        email: user.email,
        location: user.location,
        bio: user.bio,
    });
    const quickActions = useMemo(() => [
        {
            icon: Zap,
            label: "AI Snapshot",
            description: "Generate a quick AI summary of your current dasha pulse.",
            actionLabel: "Generate",
            onClick: () => setIsEditing(false),
        },
        {
            icon: Star,
            label: "Upgrade Kit",
            description: "Unlock premium rituals, mentors, and concierge charts.",
            actionLabel: "Explore",
        },
    ], []);
    const handleSave = () => {
        // In production this would persist to the backend
        setIsEditing(false);
    };
    return (<>
      <DashboardShell title="Profile" description="Softly orchestrate your identity, rituals, and astrological signature." actions={<Button className="rounded-full bg-gray-900 px-5 text-white" onClick={() => setIsEditing(true)}>
            <Edit3 className="mr-2 h-4 w-4"/>
            Edit
          </Button>} rightPanel={<QuickActionsPanel actions={quickActions}/>}>
        <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg shadow-indigo-100 backdrop-blur-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-white/60 bg-gray-100">
                <Image src={user.avatar} alt={user.name} fill sizes="120px" className="object-cover"/>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{user.memberSince}</p>
                <h2 className="font-mono text-2xl text-gray-900">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-wrap gap-3 md:justify-end">
              <Badge className="rounded-full bg-gray-900 text-white">
                {user.kundliBadge}
                <Star className="ml-2 h-3.5 w-3.5"/>
              </Badge>
              <Badge variant="outline" className="rounded-full border-gray-200 text-gray-700">
                {user.zodiac}
              </Badge>
              <Badge variant="outline" className="rounded-full border-gray-200 text-gray-700">
                {user.timezone}
              </Badge>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-base text-gray-600">{user.bio}</p>
        </motion.section>

        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((stat, index) => {
            const iconPool = [Calendar, Star, ShoppingBag];
            return (<StatCard key={stat.label} label={stat.label} value={stat.value} helper={stat.helper} trend={stat.trend} icon={iconPool[index] ?? Calendar}/>);
        })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-3xl border-white/60 bg-white/80 shadow-xl shadow-indigo-50">
            <CardContent className="space-y-6 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Kundli History</p>
                <h3 className="mt-2 font-mono text-xl text-gray-900">Recent charts</h3>
              </div>

              <div className="space-y-4">
                {history.map((entry) => (<motion.div key={entry.id} whileHover={{ y: -8, opacity: 0.98 }} transition={{ duration: 0.3 }} className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{entry.title}</p>
                        <p className="text-xs text-gray-500">{entry.chartType}</p>
                      </div>
                      <Badge variant="outline" className={entry.status === "ready" ? "border-emerald-200 text-emerald-600" : "border-yellow-200 text-yellow-600"}>
                        {entry.status === "ready" ? "Ready" : "Processing"}
                      </Badge>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                      <span>{entry.generatedAt}</span>
                      <span>{entry.feeling}</span>
                    </div>
                  </motion.div>))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-white/60 bg-white/80 shadow-xl shadow-indigo-50">
            <CardContent className="space-y-6 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Preferences</p>
                <h3 className="mt-2 font-mono text-xl text-gray-900">Astrological tone</h3>
              </div>
              {["Email nudges", "Daily rituals", "AI insights"].map((label) => (<div key={label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{label}</p>
                    <p className="text-xs text-gray-500">Ultra-light reminders curated for calm focus.</p>
                  </div>
                  <Switch defaultChecked/>
                </div>))}
            </CardContent>
          </Card>
        </div>
      </DashboardShell>

      <AnimatePresence>
        {isEditing && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setIsEditing(false)}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }} className="absolute left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/70 bg-white/95 p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
              <h3 className="font-mono text-xl text-gray-900">Edit profile</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-gray-400">Name</label>
                  <Input className="mt-1 rounded-2xl border-gray-200" value={formState.name} onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}/>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-gray-400">Email</label>
                  <Input type="email" className="mt-1 rounded-2xl border-gray-200" value={formState.email} onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}/>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-gray-400">Location</label>
                  <Input className="mt-1 rounded-2xl border-gray-200" value={formState.location} onChange={(event) => setFormState((prev) => ({ ...prev, location: event.target.value }))}/>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-gray-400">Bio</label>
                  <Textarea rows={4} className="mt-1 rounded-2xl border-gray-200" value={formState.bio} onChange={(event) => setFormState((prev) => ({ ...prev, bio: event.target.value }))}/>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-3">
                <Button variant="ghost" onClick={() => setIsEditing(false)} className="rounded-full">
                  Cancel
                </Button>
                <Button onClick={handleSave} className="rounded-full bg-gray-900 text-white">
                  Save
                </Button>
              </div>
            </motion.div>
          </motion.div>)}
      </AnimatePresence>
    </>);
}
