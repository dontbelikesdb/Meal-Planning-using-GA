from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .base import Base

class Allergy(Base):
    __tablename__ = "allergies"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True, nullable=False)
    description = Column(String, nullable=True)
    
    # Relationship
    user_profiles = relationship("UserAllergy", back_populates="allergy")

class UserAllergy(Base):
    __tablename__ = "user_allergies"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    allergy_id = Column(Integer, ForeignKey("allergies.id"), nullable=False)
    severity = Column(String, nullable=True)
    notes = Column(String, nullable=True)
    
    # Relationships
    allergy = relationship("Allergy", back_populates="user_profiles")
