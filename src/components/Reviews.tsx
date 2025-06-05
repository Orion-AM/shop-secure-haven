
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, MessageSquare } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
}

interface ReviewsProps {
  productId: string;
  productName: string;
}

// Mock reviews data
const mockReviews: Review[] = [
  {
    id: "1",
    userId: "user1",
    userName: "John D.",
    rating: 5,
    title: "Excellent product!",
    comment: "This biometric lock exceeded my expectations. Installation was straightforward and it works flawlessly.",
    date: "2024-05-15",
    verified: true
  },
  {
    id: "2",
    userId: "user2",
    userName: "Sarah M.",
    rating: 4,
    title: "Great security feature",
    comment: "Love the fingerprint recognition. Only minor issue is the app connection sometimes takes a moment.",
    date: "2024-05-10",
    verified: true
  }
];

const Reviews = ({ productId, productName }: ReviewsProps) => {
  const { isAuthenticated, user } = useAuth();
  const [reviews, setReviews] = useState<Review[]>(mockReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    title: "",
    comment: ""
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast.error("Please login to submit a review");
      return;
    }

    if (!newReview.title.trim() || !newReview.comment.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const review: Review = {
      id: Date.now().toString(),
      userId: user!.id,
      userName: user!.name,
      rating: newReview.rating,
      title: newReview.title,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
      verified: false
    };

    setReviews([review, ...reviews]);
    setNewReview({ rating: 5, title: "", comment: "" });
    setShowReviewForm(false);
    toast.success("Review submitted successfully!");
  };

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? "text-yellow-400 fill-yellow-400" 
                : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={() => interactive && onRatingChange?.(star)}
          />
        ))}
      </div>
    );
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Customer Reviews ({reviews.length})
          </h3>
          {reviews.length > 0 && (
            <div className="flex items-center gap-2 mt-1">
              {renderStars(Math.round(averageRating))}
              <span className="text-sm text-muted-foreground">
                {averageRating.toFixed(1)} out of 5
              </span>
            </div>
          )}
        </div>
        
        {isAuthenticated && (
          <Button 
            onClick={() => setShowReviewForm(!showReviewForm)}
            variant={showReviewForm ? "outline" : "default"}
          >
            {showReviewForm ? "Cancel" : "Write Review"}
          </Button>
        )}
      </div>

      {showReviewForm && (
        <Card>
          <CardHeader>
            <CardTitle>Write a Review for {productName}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <Label>Rating</Label>
                {renderStars(newReview.rating, true, (rating) => 
                  setNewReview({ ...newReview, rating })
                )}
              </div>
              
              <div>
                <Label htmlFor="title">Review Title</Label>
                <Input
                  id="title"
                  value={newReview.title}
                  onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                  placeholder="Summarize your experience"
                />
              </div>
              
              <div>
                <Label htmlFor="comment">Your Review</Label>
                <Textarea
                  id="comment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="Share your thoughts about this product..."
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full">
                Submit Review
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
            </CardContent>
          </Card>
        ) : (
          reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.userName}</span>
                      {review.verified && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    {renderStars(review.rating)}
                    <h4 className="font-medium">{review.title}</h4>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
